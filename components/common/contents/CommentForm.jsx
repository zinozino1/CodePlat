import React, { useCallback } from "react";
import { Form, Button, Input } from "antd";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCommentRequestAction } from "../../../reducers/post";

const TextAreaWrapper = styled(Input.TextArea)`
  width: 94%;
`;

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [comment, onChangeComment] = useInput("");

  const onSubmit = useCallback(() => {
    // 1) 댓글 등록시 새로고침되며 article페이지의 useEffect가 재호출되면서 데이터가 업데이트 됨
    // 2) 일부러 새로고침시킨다

    dispatch(addCommentRequestAction({ post, content: comment, writer: me }));
  }, [comment, post]);

  return (
    <Form>
      <Form.Item>
        <TextAreaWrapper
          rows={3}
          onChange={onChangeComment}
          value={comment}
          placeholder="댓글을 작성해보세요."
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          //loading={submitting}
          onClick={onSubmit}
          type="primary"
        >
          등록
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CommentForm;
