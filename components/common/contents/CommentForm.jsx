import React, { useCallback, useState } from "react";
import { Form, Button, Input, Checkbox } from "antd";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addCommentRequestAction } from "../../../reducers/post";
import Router, { withRouter } from "next/router";
import useToggle from "../../../hooks/useToggle";

const TextAreaWrapper = styled(Input.TextArea)`
  width: 94%;
`;

const CommentForm = ({ post, router }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const onChangeComment = useCallback((e) => {
    setComment(e.target.value);
  }, []);
  //const [comment, onChangeComment] = useInput("");

  const [isSecret, onToggleIsSecret] = useToggle(false);

  const onSubmit = useCallback(() => {
    // 1) 댓글 등록시 새로고침되며 article페이지의 useEffect가 재호출되면서 데이터가 업데이트 됨
    // 2) 일부러 새로고침시킨다
    setComment("");
    dispatch(
      // post말고 comment받는 것도 고려
      addCommentRequestAction({
        postId: post._id,
        type: post.type,
        content: comment,
        secretComment: isSecret,
      }),
    );
    Router.push(`http://localhost:3000/articles/${post.type}/${post._id}`);
  }, [comment, post, isSecret]);

  return (
    <Form>
      <Form.Item>
        <TextAreaWrapper
          rows={3}
          onChange={onChangeComment}
          value={comment}
          placeholder="댓글을 작성해보세요."
        />
        <Checkbox
          style={{ marginTop: "5px", color: "#999" }}
          onChange={onToggleIsSecret}
        >
          비밀 댓글
        </Checkbox>
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

export default withRouter(CommentForm);
