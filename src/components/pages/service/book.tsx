/* eslint-disable prettier/prettier */
import React from 'react';
import { useBreakpointValue } from '@chakra-ui/react';
import HTMLFlipBook from 'react-pageflip';

export const Book: React.FC = (props) => {
  const smUp = useBreakpointValue({ base: false, md: true });
  const backgroundColor = 'background.service';
  return (
    <>
      {smUp ? (
        <HTMLFlipBook
          style={
            {
              // background: '#FFFFEE',
              // backgroundImage: "url('/images/background.jpeg')",
              // boxShadow: '0 0 20px 0 rgb(0 0 0 / 50%)',
            }
          }
          startPage={0}
          width={550}
          height={850}
          size="fixed"
          minWidth={100}
          maxWidth={400}
          minHeight={400}
          maxHeight={1533}
          drawShadow={true}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="cn-book"
          flippingTime={1000}
          usePortrait={false}
          startZIndex={1}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={100}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {props.children}
        </HTMLFlipBook>
      ) : (
        <HTMLFlipBook
          style={{
            background: '#FFFFEE',
          }}
          startPage={0}
          width={300}
          height={733}
          size="fixed"
          minWidth={100}
          maxWidth={300}
          minHeight={400}
          maxHeight={1533}
          drawShadow={true}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          className="cn-book"
          flippingTime={1000}
          usePortrait={true}
          startZIndex={1}
          autoSize={false}
          clickEventForward={true}
          useMouseEvents={true}
          swipeDistance={100}
          showPageCorners={true}
          disableFlipByClick={false}
        >
          {props.children}
        </HTMLFlipBook>
      )}
    </>
  );
};
