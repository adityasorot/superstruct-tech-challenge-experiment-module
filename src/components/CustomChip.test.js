import renderer from "react-test-renderer";
import CustomChip from "./CustomChip";

it("renders active color true", () => {
  const component = renderer.create(
    <CustomChip
      activeColor={true}
      label="VERY VERY VERY LONG (UP TO 35 CHAR)"
      variant="outlined"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders active color false", () => {
  const component = renderer.create(
    <CustomChip
      activeColor={false}
      label="VERY VERY VERY LONG (UP TO 35 CHAR)"
      variant="outlined"
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
