const JobTesting = () => {
  return (
    <div class="flex flex-col md:flex-row gap-4 p-6 bg-black">
        <h1>Hello</h1>
      {/* <!-- Filter Section (Left) --> */}
      <div class="w-full md:w-1/3 bg-gray-100 p-4 rounded-md">
        <h2 class="text-xl font-semibold mb-4">Filter Jobs</h2>
        {/* <!-- Filter options go here --> */}
        <div class="space-y-4">
          <div>
            <label for="job-type" class="block text-sm font-medium">
              Job Type
            </label>
            <select id="job-type" class="w-full mt-1 p-2 border rounded-md">
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Contract</option>
            </select>
          </div>
          <div>
            <label for="location" class="block text-sm font-medium">
              Location
            </label>
            <input
              type="text"
              id="location"
              class="w-full mt-1 p-2 border rounded-md"
              placeholder="Enter location"
            />
          </div>
          {/* <!-- Add more filters as needed --> */}
        </div>
      </div>

      {/* <!-- Job List Section (Right) --> */}
      <div class="w-full md:w-2/3 bg-white p-4 rounded-md shadow-md">
        <h2 class="text-xl font-semibold mb-4">Available Jobs</h2>
        {/* <!-- Job list goes here --> */}
        <div class="space-y-4">
          <div class="p-4 border rounded-md">
            <h3 class="text-lg font-medium">Frontend Developer</h3>
            <p class="text-sm text-gray-500">Location: Remote</p>
            <p class="text-sm text-gray-500">Job Type: Full-Time</p>
          </div>
          <div class="p-4 border rounded-md">
            <h3 class="text-lg font-medium">Backend Developer</h3>
            <p class="text-sm text-gray-500">Location: San Francisco</p>
            <p class="text-sm text-gray-500">Job Type: Contract</p>
          </div>
          {/* <!-- Add more jobs as needed --> */}
        </div>
      </div>
    </div>
  );
};

export default JobTesting;
