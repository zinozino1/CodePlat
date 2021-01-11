import React, { useState, useCallback, useEffect } from "react";
import { Select, Radio, Checkbox } from "antd";
import styled from "styled-components";

const SkillFilterFormWrapper = styled.div`
    border: 1px solid black;
    margin: 0 auto;
    width: 900px;
`;

const RadioWrapper = styled.div``;

const CheckBoxWrapper = styled.div``;

const CheckBoxGroup = ({ type, onChangeCheckValue, checkValue }) => {
    let optionArr = [];

    switch (type) {
        case "language":
            optionArr = ["Java", "Python", "Javascript"];
            break;
        case "framework":
            optionArr = ["React", "Vue", "Express"];
            break;
        case "database":
            optionArr = ["MySQL", "OracleDB", "Postgre"];
            break;
        case "cloudos":
            optionArr = ["Linux", "Ubuntu", "AWS"];
            break;
        case "mldl":
            optionArr = ["Spark", "Hadoop", "TensorFlow"];
            break;
        default:
            break;
    }

    return (
        <Checkbox.Group
            options={optionArr}
            defaultValue={["language"]}
            onChange={onChangeCheckValue}
            //onChange={onChange}
        />
    );
};

const SkillFilterForm = () => {
    const [radioValue, setRadioValue] = useState({
        type: "language",
        list: [
            { value: "Java", checked: false },
            { value: "Python", checked: false },
            { value: "Javascript", checked: false },
        ],
    });
    const [checkValue, setCheckValue] = useState([]);
    const onChangeRadioValue = useCallback(
        (e) => {
            switch (e.target.value) {
                case "language":
                    setRadioValue({
                        ...radioValue,
                        list: [
                            { value: "Java", checked: false },
                            { value: "Python", checked: false },
                            { value: "Javascript", checked: false },
                        ],
                    });
                    break;
                case "framework":
                    setRadioValue({
                        ...radioValue,
                        list: [
                            { value: "React", checked: false },
                            { value: "Vue", checked: false },
                            { value: "Express", checked: false },
                        ],
                    });

                    break;
                case "database":
                    setRadioValue({
                        ...radioValue,
                        list: [
                            { value: "Mongo", checked: false },
                            { value: "MySQL", checked: false },
                            { value: "Postgre", checked: false },
                        ],
                    });

                    break;
                case "cloudos":
                    setRadioValue({
                        ...radioValue,
                        list: [
                            { value: "Linux", checked: false },
                            { value: "Apache2", checked: false },
                            { value: "AWS", checked: false },
                        ],
                    });

                    break;
                case "mldl":
                    setRadioValue({
                        ...radioValue,
                        list: [
                            { value: "Spark", checked: false },
                            { value: "Hadoop", checked: false },
                            { value: "TensorFlow", checked: false },
                        ],
                    });

                    break;
                default:
                    break;
            }
        },
        [radioValue],
    );

    const onChangeCheckBox = useCallback(
        (value) => {
            setCheckValue([...checkValue, value]);
        },
        [checkValue],
    );

    useEffect(() => {
        console.log(checkValue);
    }, [checkValue]);

    return (
        <SkillFilterFormWrapper>
            <RadioWrapper>
                <Radio.Group value={radioValue} onChange={onChangeRadioValue}>
                    <Radio.Button value="language">언어</Radio.Button>
                    <Radio.Button value="framework">프레임워크</Radio.Button>
                    <Radio.Button value="database">데이터베이스</Radio.Button>
                    <Radio.Button value="cloudos">클라우드/OS</Radio.Button>
                    <Radio.Button value="mldl">ML/DL</Radio.Button>
                </Radio.Group>
            </RadioWrapper>
            <CheckBoxWrapper>
                {radioValue.list.map((v, i) => (
                    <Checkbox
                        key={v.value}
                        onClick={(e) => {
                            console.log(e.target.value);
                            onChangeCheckBox(v.value);
                            if (e.target.value === v.value) {
                                setRadioValue({
                                    ...radioValue,
                                    list: radioValue.list.map((s, j) => {
                                        if (s.value === v.value)
                                            return {
                                                ...s,
                                                checked: !s.checked,
                                            };
                                        return s;
                                    }),
                                });
                            }
                        }}
                        checked={v.checked}
                        value={v.value}
                    >
                        {v.value}
                    </Checkbox>
                ))}
            </CheckBoxWrapper>
            <Select
                mode="tags"
                placeholder="Please select"
                //value={checkValue}
                //onChange={handleChange}
                style={{ width: "100%" }}
            ></Select>
        </SkillFilterFormWrapper>
    );
};

export default SkillFilterForm;
