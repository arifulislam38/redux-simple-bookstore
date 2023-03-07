import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { allBook, featuredBook } from "../../Redux/Filter/action";

const FilterHeader = () => {
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()
  return (
    <div class="flex items-center justify-between mb-12">
      <h4 class="mt-2 text-xl font-bold">Book List</h4>

      <div class="flex items-center space-x-4">
        <button onClick={()=> dispatch(allBook())} class={`filter-btn ${!filter.featureStatus && 'active-filter'}`} id="lws-filterAll">
          All
        </button>
        <button onClick={()=> dispatch(featuredBook())} class={`filter-btn ${filter.featureStatus && 'active-filter'}`} id="lws-filterFeatured">
          Featured
        </button>
      </div>
    </div>
  );
};

export default FilterHeader;
