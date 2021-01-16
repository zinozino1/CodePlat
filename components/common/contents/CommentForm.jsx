import React, { useCallback } from "react";
import { Form, Button, Input } from "antd";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";

const TextAreaWrapper = styled(Input.TextArea)`
    width: 94%;
`;

const CommentForm = ({ post }) => {
    const [comment, onChangeComment] = useInput("");

    const onSubmit = useCallback(() => {}, []);
    return (
        <Form onFinish={onSubmit}>
            <Form.Item>
                <TextAreaWrapper
                    style={{ width: "93%" }}
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
                    //onClick={onSubmit}
                    type="primary"
                >
                    등록
                </Button>
            </Form.Item>
        </Form>
    );
};

export default CommentForm;
