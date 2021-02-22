// import "../../../lib/util/highlight.js";

import React, { useRef, useEffect, useCallback } from "react";

// import "quill/dist/quill.bubble.css";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

//import "highlight.js/monokai-sublime.min.css";
import "quill/dist/quill.snow.css";
import styled from "styled-components";
import wrapper from "../../../store/configureStore";
import { END } from "redux-saga";

hljs.configure({
  languages: [
    "javascript",
    "ruby",
    "python",
    "rust",
    "c",
    "c++",
    "go",
    "java",
    "rust",
    "kotlin",
    "typescript",
  ],
});

const EditorBlock = styled.div`
  /* 페이지 위 아래 여백 지정 */
  padding-top: 1rem;
  padding-bottom: 1rem;
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

const Editor = ({ onChangeTitle, onChangeDescription, description, title }) => {
  //   hljs.configure({
  //     // optionally configure hljs
  //     languages: ["javascript", "ruby", "python"],
  //   });
  const Quill = typeof window === "object" ? require("quill") : () => false;
  const quillElement = useRef(null); // Quill을 적용할 DivElement를 설정
  const quillInstance = useRef(null); // Quill 인스턴스를 설정
  //   const imageRef = useRef();

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "snow",
      placeholder: "내용을 입력해주세요.",
      modules: {
        syntax: { highlight: (text) => hljs.highlightAuto(text).value },
        // 더 많은 옵션
        // https://quilljs.com/docs/modules/toolbar/ 참고
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          [{ color: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block"],
          [{ size: ["small", false, "large", "huge"] }],
        ],
      },
    });
    const quill = quillInstance.current;
    //editor default value
    quill.root.innerHTML = description;
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        onChangeDescription(quill.root.innerHTML);
      }
    });

    //quillInstance.current.getModule("toolbar");
    // const toolbar = quill.getModule("toolbar");
    // toolbar.addHandler("image", onClickImageBtn);
    return () => {};
  }, [onChangeDescription]);

  //   const onClickImageBtn = useCallback(
  //     (e) => {
  //       // quill 의 이미지 버튼을 누르면 숨겨져있는 인풋태그가 활성화된다
  //       //Quill을 초기화 합니다. 툴바에서 image가 선택되면 handlers에서 정의한대로 숨겨둔 file 타입 input을 click() 호출하여 파일 선택 dialog를 띄웁니다.
  //       imageRef.current.click();
  //     },
  //     [imageRef.current],
  //   );

  //   const onChangeImageInput = useCallback((e) => {
  //     // 실제 이미지 저장하는 로직 작성
  //     const imageFormData = new FormData();
  //     [].forEach.call(e.target.files, (f) => {
  //       console.log(f);
  //       imageFormData.append("image", f);
  //     });
  //     //console.log(description);

  //     // -> 서버에 일단 저장 -> 서버에서 이미지 소스 리턴 -> quill에서 그걸 다시 보여줘야함.
  //     // dispatch({
  //     //     type : UPLOAD_IMAGES_REQUEST,
  //     //     data : imageFormData
  //     // })
  //   }, []);

  // 이미지 전송작업 해야댐

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력해주세요."
        onChange={onChangeTitle}
        defaultValue={title}
      ></TitleInput>
      <QuillWrapper>
        <div ref={quillElement}></div>
      </QuillWrapper>
      {/* <input hidden type="file" onChange={onChangeImageInput} ref={imageRef} /> */}
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
