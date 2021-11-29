import { Button, TextField } from "@material-ui/core";
import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { writeReview } from "../../src/lib/api/mypage";

type paramType = {
    closeFunc: any,
    subscribeId: number,
}

function WriteReviewPopup({ closeFunc, subscribeId }: paramType) {

    const [reviewForm, setReviewForm] = useState(
        {
            subscribeId: subscribeId,
            title: "",
            content: "",
            imageFiles: null
        }
    )
    const [previewImg, setPreviewImg] = useState([]);   // 이미지 미리보기

    // 이미지 변경 함수
    const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files.length > 3) {
            alert("이미지는 최대 3개까지 업로드 가능합니다.");
            return false;
        }

        setReviewForm({
            ...reviewForm,
            imageFiles: files
        });

        if (files) {
            setPreviewImg([]);
            for (var i = 0; i < files.length; i++) {
                let reader = new FileReader();  //여기다가 안넣어주면 버퍼 에러걸림
                // 파일 읽어 버퍼에 저장
                reader.readAsDataURL(files[i]);
                // 파일 읽기가 완료되면 실행되는 코드
                reader.onloadend = () => {
                    const base64 = reader.result;
                    if (base64) {
                        var base64Sub = base64.toString();
                        setPreviewImg(previewImg => [...previewImg, base64Sub]);
                    }
                }
            }
        }
    }

    // 후기등록함수
    const write = async () => {

        const formData = new FormData();
        formData.append("title", reviewForm.title);
        formData.append("content", reviewForm.content);
        formData.append("subscribeId", reviewForm.subscribeId);
        formData.append("imageFiles", )

        if (window.confirm("등록하시겠습니까?")) {
            await writeReview(reviewForm)
                .then(res => {
                    alert("등록되었습니다");
                    window.location.replace(window.location.pathname + window.location.search);
                })
                .catch(err => {
                    alert("오류가 발생했습니다.");
                    console.log(err);
                })
        }

    }

    const handleChangeReview = (e: ChangeEvent<HTMLInputElement>) => {
        setReviewForm({
            ...reviewForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <TextField name='title' placeholder='제목을 입력해주세요.' value={reviewForm.title} onChange={handleChangeReview} style={{ width: '100%' }} />
            <textarea name="content" placeholder="후기를 작성해주세요" value={reviewForm.content} onChange={handleChangeReview} style={{ width: '100%', height: '200px', resize: 'none' }} />
            <p>이미지는 최대 3개까지만 등록가능합니다.</p>
            <input type="file" onChange={handleChangeFile} accept="image/*" multiple={true} />
            {previewImg && previewImg.map((item, i) => (
                <img src={item} alt="미리보기 이미지" style={{ width: "200px", height: "200px" }} />
            ))}
            <hr />
            <Button style={{ float: "right" }} onClick={write}>등록하기</Button>
        </>
    );
}

export default WriteReviewPopup;