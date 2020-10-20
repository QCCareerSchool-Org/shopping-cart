import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import { Course } from '../../state/courses';
import { useDispatchContext } from '../../hooks/useDispatchContext';
import { useStateContext } from '../../hooks/useStateContext';
import { usePopup } from '../../hooks/usePopup';
import { useScreenWidthContext } from '../../hooks/useScreenWidthContext';
import { DisabledCourseModal } from './DisabledCourseModal';

type Props = {
  course: Course;
  internal: boolean;
}

export const CheckBox: React.FC<Props> = ({ course, internal }) => {
  const { courses } = useStateContext();
  const dispatch = useDispatchContext();
  const screenWidth = useScreenWidthContext();
  const [ modal, toggleModal ] = usePopup(false);

  const courseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch({ type: 'ADD_COURSE', payload: { courseCode: course.code, internal } });
    } else {
      dispatch({ type: 'REMOVE_COURSE', payload: { courseCode: course.code, internal } });
    }
  };

  const disabledButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleModal();
  };

  const disabled = courses.disabled.includes(course.code);

  return (
    <div className="custom-control custom-checkbox mt-2">
      <input
        type="checkbox"
        className="custom-control-input"
        id={`courses-${course.code}`}
        checked={courses.selected.includes(course.code)}
        disabled={disabled}
        onChange={courseChange}
      />
      <label className={'custom-control-label' + (disabled ? ' text-medium' : '')} htmlFor={`courses-${course.code}`}>
        {course.description
          ? <><strong>{course.description}:</strong><br />{course.name}</>
          : course.name
        }
        {course.disabledMessage && disabled && (
          <button type="button" className="btn btn-link p-0 ml-2 btn-no-hover-shadow" style={{ height: '1rem' }} onClick={disabledButtonClick}>
            <FontAwesomeIcon icon={faQuestionCircle} style={{ verticalAlign: 0, position: 'relative', top: -3 }} />
          </button>
        )}
      </label>
      {screenWidth >= 576 && course.badge}
      {course.disabledMessage && <DisabledCourseModal course={course.code} name={course.name} message={course.disabledMessage} isOpen={modal} toggle={toggleModal} />}
    </div>
  );
};
