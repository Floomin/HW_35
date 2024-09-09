import PropTypes from 'prop-types';

const NoteItem = ({ note, onDelete }) => {
  return (
    <div className="note-item">
      <span>{note}</span>
      <button className="delete-button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  );
};

NoteItem.propTypes = {
  note: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
