```javascript
{
  entities: {
    users: {
      2: {
        id: 2,
        fname: 'Billy',
        lname: 'Bob',
        username: 'billybob',
        city_id: 3
      },
      3: {
        id: 3,
        fname: 'Anakin',
        lname: 'Skywalker',
        username: 'darthvader',
        city_id: 14
      }
    },
    cities: {
      1: {
        id : 1,
        city_name: 'Anaheim',
        user_ids: [2, 8]
      },
      2: {
        id : 2,
        city_name: 'Tatooine',
        user_ids: [3, 19]
      },
      3: {
        id : 3,
        city_name: 'Staten Island',
        user_ids: [10, 20, 30, 40]
      }
    }
    meet_ups: {
      7: {
        id : 7,
        date: '8-22-2017',
        time: '18:00'
        address: '742 Evergreen Terrace',
        city_id: 5,
        host_id: 33
      },
      10: {
        id : 10,
        date: '9-01-2017',
        time: '10:30'
        address: '22 Jump Street',
        city_id: 8,
        host_id: 44
      },
      13: {
        id : 13,
        date: '10-31-2017',
        time: '20:00'
        address: '123 Spooky Lane',
        city_id: 50,
        host_id: 55
      }
    }
    attendances: {
      4: {
        id: 4
        meetup_id: 7,
        attendee_ids: [1, 4, 9]
      },
      5: {
        id: 5
        meetup_id: 10,
        attendee_ids: [2, 5, 10, 17]
      },
      6: {
        id: 6
        meetup_id: 13,
        attendee_ids: [21, 34, 51, 53, 60]
      }
    }
  },
  errors: {
    login: ["Invalid email or password", "You've made an account already!"],
    signup: ["We've made a mistake"]
  },
  currentUser: {
    id: 1,
    username: 'Guest'
  }
}

```
