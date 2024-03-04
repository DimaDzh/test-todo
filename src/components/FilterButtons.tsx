import { useDispatch, useSelector } from "react-redux";
import { filterTodos } from "../redux/actions";
import { TodoState } from "../redux/reducer";
import CustomRadio from "./common/CustomRadio";

const FilterButtons = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: TodoState) => state.filter);
  const stateLength = useSelector((state: TodoState) => state.todos.length);
  const completedCount = useSelector(
    (state: TodoState) => state.completedCount
  );
  const incompleteCount = useSelector(
    (state: TodoState) => state.incompleteCount
  );

  const handleFilter = (filter: string): void => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className="flex justify-between flex-col gap-5 lg:flex-row w-full items-center mb-5">
      <div className="flex flex-wrap gap-4">
        <CustomRadio
          value="ALL"
          checked={currentFilter === "ALL"}
          handleChange={() => handleFilter("ALL")}
          labelText="ALL"
          todosNumber={stateLength}
        />
        <CustomRadio
          value="COMPLETED"
          checked={currentFilter === "COMPLETED"}
          handleChange={() => handleFilter("COMPLETED")}
          labelText="Completed"
          todosNumber={completedCount}
        />
        <CustomRadio
          value="INCOMPLETE"
          checked={currentFilter === "INCOMPLETE"}
          handleChange={() => handleFilter("INCOMPLETE")}
          labelText="INCOMPLETE"
          todosNumber={incompleteCount}
        />
      </div>
    </div>
  );
};

export default FilterButtons;
