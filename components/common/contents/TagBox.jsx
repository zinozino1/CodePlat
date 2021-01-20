import React, { useState, useCallback } from "react";
import { Tag, Input, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const TagBox = ({
  tags,
  setTags,
  inputVisible,
  setInputVisible,
  inputValue,
  setInputValue,
  editInputIndex,
  setEditInputIndex,
  editInputValue,
  setEditInputValue,
}) => {
  const handleClose = useCallback(
    (removedTag) => {
      setTags(tags.filter((tag) => tag !== removedTag));
    },
    [tags],
  );
  const showInput = useCallback(() => {
    setInputVisible(true);
  }, []);
  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);
  const handleInputConfirm = useCallback(() => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  }, [inputValue, tags]);
  const handleEditInputChange = useCallback((e) => {
    setEditInputValue(e.target.value);
  }, []);
  const handleEditInputConfirm = useCallback(() => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue("");
  }, []);

  return (
    <>
      {tags.map((tag, index) => {
        if (editInputIndex === index) {
          return (
            <Input
              ref={saveEditInputRef}
              key={tag}
              size="small"
              className="tag-input"
              value={editInputValue}
              onChange={handleEditInputChange}
              onBlur={handleEditInputConfirm}
              onPressEnter={handleEditInputConfirm}
            />
          );
        }

        const isLongTag = tag.length > 20;

        const tagElem = (
          <Tag
            className="edit-tag"
            key={tag}
            closable
            onClose={() => handleClose(tag)}
          >
            <span>{isLongTag ? `${tag.slice(0, 20)}...` : tag}</span>
          </Tag>
        );
        return isLongTag ? (
          <Tooltip title={tag} key={tag}>
            {tagElem}
          </Tooltip>
        ) : (
          tagElem
        );
      })}
      {inputVisible && (
        <Input
          type="text"
          size="small"
          className="tag-input"
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          style={{ width: "78px", marginRight: "8px", verticalAlign: "top" }}
        />
      )}
      {!inputVisible && (
        <Tag className="site-tag-plus" onClick={showInput}>
          <PlusOutlined /> 태그추가
        </Tag>
      )}
    </>
  );
};

export default TagBox;
