import React from 'react';
import { Todo } from '../../types/Todo';

import cn from 'classnames';

interface Props {
  todos: Todo[];
  selectedTodoId: number | null;
  setSelectedTodoId: (todo: number) => void;
}
export const TodoList: React.FC<Props> = props => {
  const { todos, selectedTodoId, setSelectedTodoId } = props;

  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo => {
          return (
            <tr
              data-cy="todo"
              className={cn({
                'has-background-info-light':
                  selectedTodoId && todo.id === selectedTodoId,
              })}
              key={todo.id}
            >
              <td className="is-vcentered">{todo.id}</td>
              <td className="is-vcentered">
                {todo.completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p
                  className={cn({
                    'has-text-success': todo.completed,
                    'has-text-danger': !todo.completed,
                  })}
                >
                  {todo.title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => {
                    setSelectedTodoId(todo.id);
                  }}
                >
                  <span className="icon">
                    <i
                      className={cn('far', {
                        'fa-eye-slash':
                          selectedTodoId && todo.id === selectedTodoId,
                        'fa-eye': !selectedTodoId || todo.id !== selectedTodoId,
                      })}
                    />
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};