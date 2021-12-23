import styled from "styled-components";
import DMComponent from "./DMComponent";

// import Header from "./Header";
const SCrollContainer = styled.div`
::-webkit-scrollbar {
    display: none;
`;
const Container = styled.div`
  display: flex;
  position: absolute;
  width: 928px;
  height: 600px;
  left: 476px;
  top: 56px;
  box-sizing: border-box;
  border: solid black 1px;
  //   padding: 5px;
  //   background: blueviolet;
`;
const DM = () => {
  return (
    <div style={{ position: "relative" }}>
      {/* <Header /> */}
      <Container>
        <div
          style={{
            width: "384px",
            height: "600px",
            boxSizing: "border-box",
            borderRight: "0.4px solid black",
          }}
        >
          <div
            style={{
              width: "384px",
              height: "56px",
              boxSizing: "border-box",
              borderBottom: "0.4px solid black",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "auto 18px auto auto" }}>Username</p>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="#262626"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div style={{ position: "absolute", left: "344px", top: "16px" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.6667 20H4.00002V5.33333H12.8134L14.1467 4H4.00002C3.6464 4 3.30726 4.14048 3.05721 4.39052C2.80716 4.64057 2.66669 4.97971 2.66669 5.33333V20C2.66669 20.3536 2.80716 20.6928 3.05721 20.9428C3.30726 21.1929 3.6464 21.3333 4.00002 21.3333H18.6667C19.0203 21.3333 19.3594 21.1929 19.6095 20.9428C19.8595 20.6928 20 20.3536 20 20V10L18.6667 11.3333V20Z"
                  fill="#262626"
                />
                <path
                  d="M22.3533 3.89335L20.1067 1.64668C20.007 1.5467 19.8885 1.46738 19.7581 1.41325C19.6277 1.35913 19.4879 1.33127 19.3467 1.33127C19.2055 1.33127 19.0656 1.35913 18.9352 1.41325C18.8048 1.46738 18.6864 1.5467 18.5867 1.64668L9.44666 10.84L8.70666 14.0467C8.67513 14.2021 8.67845 14.3626 8.71636 14.5166C8.75428 14.6706 8.82586 14.8143 8.92594 14.9373C9.02603 15.0604 9.15214 15.1597 9.2952 15.2282C9.43826 15.2967 9.59472 15.3326 9.75333 15.3333C9.8353 15.3424 9.91802 15.3424 9.99999 15.3333L13.2333 14.62L22.3533 5.41335C22.4533 5.31364 22.5326 5.19519 22.5868 5.06477C22.6409 4.93436 22.6687 4.79455 22.6687 4.65335C22.6687 4.51215 22.6409 4.37234 22.5868 4.24192C22.5326 4.11151 22.4533 3.99305 22.3533 3.89335ZM12.54 13.3867L10.1 13.9267L10.6667 11.5067L17.5467 4.58001L19.4267 6.46001L12.54 13.3867ZM20.18 5.70668L18.3 3.82668L19.3333 2.77335L21.2267 4.66668L20.18 5.70668Z"
                  fill="#262626"
                />
              </svg>
            </div>
          </div>
          <SCrollContainer
            className="unscroll"
            style={{
              overflow: "scroll",
              width: "384px",
              height: "544px",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
            <DMComponent user={"Username"} />
          </SCrollContainer>
        </div>
        <div
          style={{
            width: "544px",
            height: "600px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "544px",
              height: "56px",
              boxSizing: "border-box",
              borderBottom: "0.4px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 16px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
              }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png"
                alt=""
                width="32px"
                height="32px"
              />
              <p
                style={{
                  margin: "auto 0px auto 12px",
                  fontWeight: "500",
                  fontSize: "14px",
                  lineHeight: "16px",
                  letterSpacing: "0.5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Username
              </p>
            </div>
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 -0.00100708C16.524 -0.00100708 21.002 4.47699 21.002 10.001C21.002 15.524 16.524 20.002 11 20.002C5.47605 20.002 0.998047 15.524 0.998047 10.001C0.998047 4.47699 5.47605 -0.00100708 11 -0.00100708ZM11 1.49899C9.87586 1.4868 8.76041 1.69769 7.71827 2.11946C6.67612 2.54124 5.72798 3.16551 4.92871 3.95616C4.12944 4.74681 3.49492 5.68813 3.06187 6.72563C2.62882 7.76314 2.40584 8.87624 2.40584 10.0005C2.40584 11.1248 2.62882 12.2378 3.06187 13.2754C3.49492 14.3129 4.12944 15.2542 4.92871 16.0448C5.72798 16.8355 6.67612 17.4597 7.71827 17.8815C8.76041 18.3033 9.87586 18.5142 11 18.502C13.2321 18.4678 15.3611 17.5571 16.9274 15.9665C18.4937 14.376 19.3717 12.2333 19.3717 10.001C19.3717 7.76871 18.4937 5.62597 16.9274 4.03545C15.3611 2.44493 13.2321 1.53423 11 1.49999V1.49899ZM10.996 8.49899C11.1775 8.49876 11.3528 8.56429 11.4896 8.68343C11.6264 8.80258 11.7154 8.96727 11.74 9.14699L11.747 9.24899L11.75 14.751C11.75 14.941 11.6778 15.1239 11.5481 15.2628C11.4183 15.4016 11.2407 15.4861 11.0512 15.499C10.8616 15.512 10.6742 15.4525 10.5267 15.3326C10.3793 15.2126 10.2829 15.0412 10.257 14.853L10.25 14.752L10.247 9.24999C10.247 9.05108 10.3261 8.86032 10.4667 8.71966C10.6074 8.57901 10.7981 8.49999 10.997 8.49999L10.996 8.49899ZM11 5.00299C11.1338 4.99876 11.2671 5.02145 11.3919 5.06973C11.5168 5.118 11.6307 5.19087 11.7268 5.28401C11.8229 5.37714 11.8994 5.48865 11.9516 5.6119C12.0038 5.73516 12.0307 5.86764 12.0307 6.00149C12.0307 6.13534 12.0038 6.26783 11.9516 6.39108C11.8994 6.51434 11.8229 6.62584 11.7268 6.71898C11.6307 6.81212 11.5168 6.88499 11.3919 6.93326C11.2671 6.98153 11.1338 7.00423 11 6.99999C10.7407 6.99178 10.4947 6.88299 10.3142 6.69663C10.1336 6.51027 10.0326 6.26097 10.0326 6.00149C10.0326 5.74201 10.1336 5.49272 10.3142 5.30636C10.4947 5.12 10.7407 5.0112 11 5.00299Z"
                fill="#262626"
              />
            </svg>
          </div>
          <div
            style={{
              width: "496px",
              height: "40px",
              border: "0.4px solid #8E8E8E",
              boxSizing: "border-box",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px",
              position: "absolute",
              left: "408px",
              top: "536px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0.400024C12.5461 0.400024 14.9879 1.41145 16.7882 3.2118C18.5886 5.01215 19.6 7.45395 19.6 10C19.6 12.5461 18.5886 14.9879 16.7882 16.7882C14.9879 18.5886 12.5461 19.6 10 19.6C7.45395 19.6 5.01215 18.5886 3.2118 16.7882C1.41145 14.9879 0.400024 12.5461 0.400024 10C0.400024 7.45395 1.41145 5.01215 3.2118 3.2118C5.01215 1.41145 7.45395 0.400024 10 0.400024ZM10 1.60002C8.89692 1.60002 7.80462 1.8173 6.78548 2.23944C5.76635 2.66158 4.84034 3.28032 4.06033 4.06033C3.28032 4.84034 2.66158 5.76635 2.23944 6.78548C1.8173 7.80462 1.60002 8.89692 1.60002 10C1.60002 11.1031 1.8173 12.1954 2.23944 13.2146C2.66158 14.2337 3.28032 15.1597 4.06033 15.9397C4.84034 16.7197 5.76635 17.3385 6.78548 17.7606C7.80462 18.1828 8.89692 18.4 10 18.4C12.2278 18.4 14.3644 17.515 15.9397 15.9397C17.515 14.3644 18.4 12.2278 18.4 10C18.4 7.77221 17.515 5.63563 15.9397 4.06033C14.3644 2.48502 12.2278 1.60002 10 1.60002ZM6.58602 12.9124C7.4534 13.7857 8.62236 14.2935 9.85261 14.3314C11.0828 14.3694 12.2809 13.9346 13.2004 13.1164L13.414 12.9124C13.5194 12.8053 13.6612 12.7416 13.8114 12.734C13.9615 12.7264 14.109 12.7754 14.2247 12.8714C14.3404 12.9673 14.4159 13.1032 14.4362 13.2521C14.4565 13.4011 14.4202 13.5522 14.3344 13.6756L14.266 13.7596L14.2384 13.786C13.6782 14.3427 13.0139 14.7835 12.2833 15.0834C11.5527 15.3832 10.7702 15.5363 9.98051 15.5337C9.19079 15.5311 8.40931 15.373 7.68069 15.0684C6.95208 14.7638 6.2906 14.3187 5.73403 13.7584C5.62184 13.6454 5.55913 13.4925 5.55969 13.3333C5.56025 13.1741 5.62404 13.0216 5.73702 12.9094C5.85001 12.7972 6.00293 12.7345 6.16215 12.7351C6.32136 12.7357 6.47384 12.7994 6.58602 12.9124ZM13 7.00002C13.3183 7.00002 13.6235 7.12645 13.8486 7.3515C14.0736 7.57654 14.2 7.88176 14.2 8.20002C14.2 8.51828 14.0736 8.82351 13.8486 9.04855C13.6235 9.2736 13.3183 9.40002 13 9.40002C12.6818 9.40002 12.3765 9.2736 12.1515 9.04855C11.9265 8.82351 11.8 8.51828 11.8 8.20002C11.8 7.88176 11.9265 7.57654 12.1515 7.3515C12.3765 7.12645 12.6818 7.00002 13 7.00002ZM7.00002 7.00002C7.31828 7.00002 7.62351 7.12645 7.84855 7.3515C8.0736 7.57654 8.20002 7.88176 8.20002 8.20002C8.20002 8.51828 8.0736 8.82351 7.84855 9.04855C7.62351 9.2736 7.31828 9.40002 7.00002 9.40002C6.68177 9.40002 6.37654 9.2736 6.1515 9.04855C5.92645 8.82351 5.80002 8.51828 5.80002 8.20002C5.80002 7.88176 5.92645 7.57654 6.1515 7.3515C6.37654 7.12645 6.68177 7.00002 7.00002 7.00002Z"
                fill="#262626"
              />
            </svg>
            <input
              type="text"
              style={{
                width: "368px",
                height: "24px",
                border: "none",
                outline: "none",
              }}
              placeholder="Message ..."
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                stroke="#262626"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                stroke="#262626"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 15L16 10L5 21"
                stroke="#262626"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6328 4.64689C20.3187 3.91948 19.8657 3.2603 19.2992 2.70627C18.7323 2.15058 18.064 1.70898 17.3305 1.40549C16.5699 1.08953 15.7541 0.927808 14.9305 0.929704C13.775 0.929704 12.6477 1.24611 11.668 1.84377C11.4336 1.98674 11.2109 2.14377 11 2.31486C10.7891 2.14377 10.5664 1.98674 10.332 1.84377C9.35234 1.24611 8.225 0.929704 7.06953 0.929704C6.2375 0.929704 5.43125 1.08908 4.66953 1.40549C3.93359 1.71017 3.27031 2.14845 2.70078 2.70627C2.13359 3.25968 1.6805 3.91901 1.36719 4.64689C1.04141 5.40392 0.875 6.20783 0.875 7.03517C0.875 7.81564 1.03438 8.62892 1.35078 9.45627C1.61563 10.1477 1.99531 10.8649 2.48047 11.5891C3.24922 12.7352 4.30625 13.9305 5.61875 15.1422C7.79375 17.1508 9.94766 18.5383 10.0391 18.5945L10.5945 18.9508C10.8406 19.1078 11.157 19.1078 11.4031 18.9508L11.9586 18.5945C12.05 18.536 14.2016 17.1508 16.3789 15.1422C17.6914 13.9305 18.7484 12.7352 19.5172 11.5891C20.0023 10.8649 20.3844 10.1477 20.6469 9.45627C20.9633 8.62892 21.1227 7.81564 21.1227 7.03517C21.125 6.20783 20.9586 5.40392 20.6328 4.64689ZM11 17.0969C11 17.0969 2.65625 11.7508 2.65625 7.03517C2.65625 4.64689 4.63203 2.71095 7.06953 2.71095C8.78281 2.71095 10.2688 3.6672 11 5.06408C11.7312 3.6672 13.2172 2.71095 14.9305 2.71095C17.368 2.71095 19.3438 4.64689 19.3438 7.03517C19.3438 11.7508 11 17.0969 11 17.0969Z"
                fill="#262626"
              />
            </svg>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DM;
