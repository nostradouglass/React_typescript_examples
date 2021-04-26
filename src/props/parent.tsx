import { Child, ChildAsFC } from "./child";

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={() => console.log("Clicked")}>
        Test 1
      </Child>

      <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
        Test 2
      </ChildAsFC>
    </div>
  );
};

export default Parent;
