import { Button } from "antd";
import { ArrowDownOutlined } from '@ant-design/icons';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const ScrollButton = () => {
  const [ico, setIco] = useState(<ArrowDownOutlined />);
  const scrollBehaviour = () => {
    const isAtBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;

    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIco(<ArrowDownOutlined />);
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIco(<ArrowUpOutlined />);
    }
  };

  return (
    <div className="md:hidden rounded-full bg-blue-500 block fixed bottom-4 right-4">
      <Button
        shape="circle"
        type="primary"
        size="large"
        onClick={scrollBehaviour}
      >
        <span className="flex justify-center items-center">{ico}</span>
      </Button>
    </div>
  );
};
