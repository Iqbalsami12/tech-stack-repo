
const SelectedStack = () => {
    return (
        <div>
             <div className=" mt-12 card w-96 bg-base-100 card-lg shadow-sm h-96">
  <div className="card-body">
    <h2 className="card-title">Your Stack</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary w-full border-amber-50 shadow-none bg-white">Remove</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SelectedStack;