import React, { useRef, useEffect } from "react";

// import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import styled from "styled-components";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";

const EditorBlock = styled.div`
  /* 페이지 위 아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
`;
const TitleInput = styled.input`
  /* padding-left: 20px; */
  font-size: 1.2rem;
  outline: none;
  padding-bottom: 0.2rem;
  border: none;
  border-bottom: 1px solid #aaa;
  margin-bottom: 1rem;
  width: 100%;
`;
const QuillWrapper = styled.div`
  /* 최소 크기 지정 및 padding 제거 */
  .ql-editor {
    padding: 20px;
    min-height: 320px;
    font-size: 1rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 20px;
  }
`;

const Editor = ({ onChangeTitle, onChangeDescription }) => {
  const Quill = typeof window === "object" ? require("quill") : () => false;
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 입력해주세요.",
      modules: {
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ color: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
          [{ size: ["small", false, "large", "huge"] }],
          ["clean"],
        ],
      },
    });
    const quill = quillInstance.current;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeDescription(quill.root.innerHTML);
      }
    });
  }, [onChangeDescription]);

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력해주세요."
        onChange={onChangeTitle}
      ></TitleInput>
      <QuillWrapper>
        <div ref={quillElement}></div>
      </QuillWrapper>
    </EditorBlock>
  );
};
// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {

//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   },
// );

export default Editor;
