import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOrder, changePlace } from "../../../redux/actions/moveComponent";
import rootStateType, { itemNameType } from "../../../redux/types";

const useDragCanvas = (canvas: HTMLDivElement | null) => {
  const dispatch = useDispatch();

  const { draggedItem, items } = useSelector((state: rootStateType) => {
    const names = Object.keys(state.items) as itemNameType[];
    const draggedItem = names.filter((name) => state.items[name]?.dragged)[0];
    const items = state.items;

    return { draggedItem, items };
  });

  const maxOrder = Object.values(items)
    .filter((value) => value.order && value.place === "canvas")
    .map((value) => value.order)
    .sort((a, b) => (b || 0) - (a || 0))[0];

  const dragOverHandler = (e: React.DragEvent) => {
    e.preventDefault();
    if (canvas && canvas.className.indexOf("empty") >= 0) {
      canvas.style.background = "#f0f9ff";
    }
  };

  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault();
    if (canvas) {
      canvas.style.background = "#fff";
    }
  };

  const dropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    if (canvas) {
      canvas.style.background = "#fff";
    }

    const target = e.target as HTMLDivElement;
    const item = target.closest("[data-name]"); // елемент на который мы дропаем

    if (!item) {
      // если дропаем на пустое место канваса
      dispatch(changePlace(draggedItem, "canvas"));
      dispatch(
        changeOrder(
          draggedItem,
          draggedItem === "display" ? 0 : maxOrder ? maxOrder + 1 : 1
        )
      );

      return;
    }

    if (items[draggedItem].place === "side") {
      dispatch(changePlace(draggedItem, "canvas"));
    }
    if (draggedItem === "display") {
      dispatch(changeOrder(draggedItem, 0));
      return;
    }

    const name = item.getAttribute("data-name") as itemNameType;
    const sortedByOrderItems = Object.entries(items)
      .filter((item) => item[1].place === "canvas" && item[0] !== "display")
      .sort((a, b) => (a[1].order || 1) - (b[1].order || 1))
      .map((item) => item[0]);
    // индекс(order - 1) элемента на который дропаем
    const dropIndex = sortedByOrderItems.indexOf(name);
    // индекс(order - 1) элемента который дропаем
    const draggedIndex = sortedByOrderItems.indexOf(draggedItem);
    // если элемент на канвасе удаляем его из массива
    if (draggedIndex > 0) {
      sortedByOrderItems.splice(draggedIndex, 1);
    }
    // вставляем дропаемый элемент на место элемента на который дропаем
    sortedByOrderItems.splice(dropIndex + 1, 0, draggedItem);
    // синхронизируем действия с массивом с состоянием в state
    sortedByOrderItems.forEach((current, index) => {
      const itemName = current as itemNameType;
      dispatch(changeOrder(itemName, index + 1));
    });
  };

  return { dragOverHandler, dragLeaveHandler, dropHandler };
};

export default useDragCanvas;
