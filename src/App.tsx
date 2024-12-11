//CHECK COMMENTS BEFORE START
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
//Delete comment below
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';

import { getTodos, getUser } from './api';
import { Todo } from './types/Todo';
import { User } from './types/User';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  //Delete comment below.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User | null>();
  // eslint-disable-next-line prettier/prettier
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  useEffect(() => {
    setIsLoading(true);

    const getTodoList = async () => {
      try {
        const data = await getTodos();

        setTodos(data);
        setIsLoading(false);
      } catch (err) {
        setError('GET getTodoList() ERROR');
        setIsLoading(true);
      }
    };

    if (selectedTodoId) {
      const getCurrentUser = async () => {
        try {
          const userId = todos.find(todo => todo.id === selectedTodoId)?.userId;

          if (userId) {
            const currentUser = await getUser(userId);

            setUser(currentUser);
          }
        } catch (err) {
          setError('getUser() ERROR');
        }
      };

      getCurrentUser();
    }

    getTodoList();
  }, [selectedTodoId]);

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter />
            </div>
            {error && (
              <div className="message is-danger is-flex is-justify-content-center">
                {error}
              </div>
            )}
            <div className="block">
              {isLoading ? (
                <Loader />
              ) : (
                <TodoList
                  todos={todos}
                  selectedTodoId={selectedTodoId}
                  setSelectedTodoId={setSelectedTodoId}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* {selectedTodoId && (
        <TodoModal
          currentUser={user}
          setUser={setUser}
          setSelectedTodoId={setSelectedTodoId}
          isLoading={isLoading}
        />
      )} */}
    </>
  );
};
