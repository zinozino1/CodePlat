{
  registerType == "local" && (
    <>
      <StyledDivider>인증</StyledDivider>
      <RegisterInputItemWrapper
        name="github"
        label="인증코드 입력"
        hasFeedback
        onChange={onChangePassword}
      >
        <Input
          placeholder="이메일에서 인증코드를 확인해주세요."
          className="email-code"
        />
        <Button>확인</Button>
      </RegisterInputItemWrapper>
      <StyledDivider>선택 입력 사항</StyledDivider>
      <SkillFilterForm type="register" />
      <RegisterInputItemWrapper
        name="github"
        label="Github"
        hasFeedback
        onChange={onChangePassword}
      >
        <Input placeholder="github 닉네임" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="avatar"
        label="사용자 이미지 설정"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        onChange={onChangePassword}
      >
        {/* action="/upload.do" */}
        {/* beforeUpload 함수 사용해야함  */}
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>파일 업로드</Button>
        </Upload>
      </RegisterInputItemWrapper>
      <StyledDivider />
      <PushBackButton onClick={onPushBack}>뒤로가기</PushBackButton>
    </>
  );
}
{
  registerType === "social" && (
    <>
      <StyledDivider>선택 입력 사항</StyledDivider>
      <SkillFilterForm type="register" />
      <RegisterInputItemWrapper
        name="github"
        label="Github"
        hasFeedback
        onChange={onChangePassword}
      >
        <Input placeholder="github 닉네임" />
      </RegisterInputItemWrapper>
      <RegisterInputItemWrapper
        name="avatar"
        label="사용자 이미지 설정"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        onChange={onChangePassword}
      >
        {/* action="/upload.do" */}
        {/* beforeUpload 함수 사용해야함  */}
        <Upload name="logo" listType="picture">
          <Button icon={<UploadOutlined />}>파일 업로드</Button>
        </Upload>
      </RegisterInputItemWrapper>
      <StyledDivider />
      <PushBackButton onClick={onPushBack}>뒤로가기</PushBackButton>
    </>
  );
}
