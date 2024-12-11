//TODOS ADD useEffect import, add props in args.

import React from 'react';
import { Loader } from '../Loader';
import { User } from '../../types/User';

interface Props {
  currentUser: User;
  setUser: (userId: User | null) => void;
  setSelectedTodoId: (todo: number) => void;
  isLoading: boolean;
}
export const TodoModal: React.FC<Props> = () => {
  //const { currentUser, setUser, setSelectedTodoId, isLoading } = props;

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />
      {false ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              Todo #2
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button" className="delete" data-cy="modal-close" />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              quis ut nam facilis et officia qui
            </p>

            <p className="block" data-cy="modal-user">
              {/* <strong className="has-text-success">Done</strong> */}
              <strong className="has-text-danger">Planned</strong>

              {' by '}

              <a href="mailto:Sincere@april.biz">Leanne Graham</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
