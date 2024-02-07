import React,{useState} from "react";

const Review = () => {

    const [moreBtn, setMoreBtn] = useState("더보기 ▼");
    const [isView, setIsView] = useState(false);
    
    const ReviewTrue = () => {
      return (
        <>
          주문한지 하루만에 배송이 도착해서 너무 좋았습니다.
          <br />
          다음에도 필요하면 또 여기서 시킬 것 같아요.
        </>  
      )
    };
    
    const onClick = () => {
      if (moreBtn === "더보기 ▼") {
        setMoreBtn("접기 ▲");
        setIsView(true);
      } else {
        setMoreBtn("더보기 ▼");
        setIsView(false);
      }
    };
    
    return (
      <div className="review">

          <div className="reviewMain">
            {isView ? <ReviewTrue /> : null}
            <span className="reviewMainHandler" onClick={onClick}>
              {moreBtn}
            </span>
        </div>
     </div>
    );
  }

  export default Review;