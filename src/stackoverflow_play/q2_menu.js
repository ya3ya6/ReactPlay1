// https://stackoverflow.com/questions/63253849/use-react-js-to-create-desktop-like-menu-in-angularjs/63254442#63254442
import React, { useEffect, useState } from "react";
import { Keys, Menu, MenuBar, Separator } from "react-app-menu";
import "react-app-menu/dist/styles/react-app-menu.css";

const MenuToolBar = () => {
  const toggleLoading = () => {};
  const showToolbar = () => {};
  const showTooltip = () => {};
  const handleMenuSelect = menuId => {
    toggleLoading(true);
    setTimeout(() => {
      openModal();
      setSelectedFile({ name: menuId });
    }, 500);
  };

  const [selectedFile, setSelectedFile] = useState({});
  const [showModal, toggleModal] = useState(false);

  const openModal = () => {
    toggleModal(true);
  };

  const closeModal = () => {
    toggleModal(false);
  };

  const onFolderSelect = (): void => {
    console.log("Folder selected");
  };

  return (
    <div
      style={{
        background: "#FBFBFB",
        borderBottom: "1px solid rgb(218, 220, 224)"
      }}
    >
      <MenuBar onSelect={handleMenuSelect}>
        <Menu label="File" focusKey={"F"}>
          <Menu label="New">
            <Menu menuId="NewNotebook" label="Notebook" />
            <Menu menuId="NewNote" label="Note" hotKeys={Keys.ctrlAlt("N")} />
            <Separator />
            <Menu
              label="Folder"
              hotKeys={Keys.ctrlAlt("F")}
              onSelect={onFolderSelect}
            />
          </Menu>
          <Menu label="Settings" hotKeys={Keys.altShift("S")} />
        </Menu>
        <Menu label="Edit" focusKey="E">
          <Menu menuId="search" label="Search" hotKeys={Keys.ctrlShift("F")} />
          <Menu menuId="undo" label="Undo" hotKeys={Keys.ctrl("Z")} />
          <Menu menuId="rename" label="Rename" hotKeys={Keys.shift("F6")} />
        </Menu>
        <Menu label="View" focusKey="V">
          <Menu
            menuId="toolbar"
            label="Toolbars"
            checked={showToolbar}
            hotKeys={Keys.ctrlAlt("T")}
          />
          <Menu menuId="statusBar" label="StatusBar" />
          <Menu
            menuId="toolTips"
            label="Tooltips"
            checked={showTooltip}
            hotKeys={Keys.ctrlAltShift("T")}
          />
        </Menu>
      </MenuBar>
    </div>
  );
};
export default MenuToolBar;
