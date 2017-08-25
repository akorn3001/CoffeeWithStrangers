const DUMMY_MEETUPS = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
]

export default DUMMY_MEETUPS;


// # Table name: meetups
// #
// #  id         :integer          not null, primary key
// #  date       :date             not null
// #  time       :time             not null
// #  address    :string           not null
// #  city_id    :integer          not null
// #  host_id    :integer          not null
// #  created_at :datetime         not null
// #  updated_at :datetime         not null
