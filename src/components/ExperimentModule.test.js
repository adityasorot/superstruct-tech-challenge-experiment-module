import renderer from "react-test-renderer";
import ExperimentModule from "./ExperimentModule";

it("Experiment Module", () => {
  const component = renderer.create(<ExperimentModule />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
