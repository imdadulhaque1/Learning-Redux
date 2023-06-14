const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

// Define Initial State
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// Create Async Thunk
const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();

  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
