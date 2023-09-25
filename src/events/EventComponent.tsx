const EventComponent: React.FC = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const handelDrag = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <div draggable onDragStart={handelDrag}>
        Drag Me!
      </div>
    </>
  );
};

export default EventComponent;
