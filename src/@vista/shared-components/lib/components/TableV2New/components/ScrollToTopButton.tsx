import { styled } from "@health/theme-common";

import backToTopImg from "../../../assets/images/backToTop.svg";

import { theme } from "../../../utils/styleTheme";

export const Styled = {
  ButtonWrapper: styled.button<{ showButton: boolean }>`
    position: fixed;
    bottom: ${theme.space_24};
    right: ${theme.space_32};
    background: ${theme.color_slate70};
    width: 46px;
    height: 46px;
    text-align: center;
    border: 1px solid ${theme.color_slate60};
    border-radius: 30px;
    line-height: 40px;
    z-index: 100;
    visibility: ${({ showButton }) => (showButton ? "visible" : "hidden")};

    &:hover {
      box-shadow: 0 0 4px 0.5px ${theme.color_slate50};
      cursor: pointer;
    }
  `,
  UpArrow: styled.img`
    position: relative;
    width: 16px;
    height: 10px;
  `,
};

interface IScrollToTopButtonProps {
  elementRef?: React.RefObject<HTMLElement>;
  showButton: boolean;
  parentForScrollTop?: React.RefObject<HTMLElement>;
  trackScrollTopButtonName?: string;
}

const ScrollToTopButton = ({
  elementRef,
  showButton,
  parentForScrollTop,
  trackScrollTopButtonName,
}: IScrollToTopButtonProps) => {
  const scrollToTopAction = () => {
    elementRef?.current?.scrollTo({ top: 0, behavior: "smooth" });
    (!!parentForScrollTop ? parentForScrollTop.current : window)?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    !!parentForScrollTop && window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    scrollToTopAction();
    trackScrollTopButtonName && trackClickEvent(trackScrollTopButtonName);
  };

  const trackClickEvent = (trackId: string) => {
    // import("@webstudio/dispatcher").then(({ Dispatcher }: any) => {
    //   Dispatcher.dispatch("click-event", trackId);
    // });
  };

  return (
    <Styled.ButtonWrapper
      data-testid={"scroll-to-top-button"}
      onClick={handleClick}
      showButton={showButton}
    >
      <Styled.UpArrow src={backToTopImg} />
    </Styled.ButtonWrapper>
  );
};

export default ScrollToTopButton;
