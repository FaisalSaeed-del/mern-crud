import notesStore from "../stores/notesStore";

export default function CreateForm() {
  const store = notesStore();

  if (store.updateForm._id) return <></>;

  return (
    <div className="container">
      <h2 className="heading">Create note</h2>
      <form onSubmit={store.createNote}>
        <input
          className="input-field"
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <textarea
          className="text-field"
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
        />
        <button className="btn-field" type="submit">
          Create note
        </button>
      </form>
    </div>
  );
}
