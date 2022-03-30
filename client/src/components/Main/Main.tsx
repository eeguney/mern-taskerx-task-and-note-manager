import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Wrapper from './Wrapper';

const Main = () => {
  return (
    <Wrapper>
      <Header />
      <TodoList />
      <Filter />
    </Wrapper>
  );
};

export default Main;
