# Sample State

```javascript
{
  session:{
      currentUser: {
      id: 4,
      email: "loudcloud@gmail.com",
      name: "LoudCloud User"
    }
  },

  errors: {
    session: {
      password: ['password is too short']
    },
    upload: [],
    comment: []
  },

  modal: "signIn",

  currentTrack: {
    id: 112,
    playing: true,
    restart: false
  },

  tracks: {
    432: {
      title: "Life On Mars?",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      QueuePos: 1,
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    147: {
      title: "Starman",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      QueuePos: 2,
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    532: {
      title: "Moonage Daydream",
      duration: 180,
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      QueuePos: 3,
      artist: {
        id: 67,
        name: "David Bowie"
      }
    }
  }

  playQueue: {
    '1': {
      id: 432,
      title: "Life On Mars?",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    '2': {
      id: 147,
      title: "Starman",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    },
    '3': {
      id: 532,
      title: "Moonage Daydream",
      media_url: "http://some.url",
      image_url: "http://some.other.url",
      track_credits: "",
      artist: {
        id: 67,
        name: "David Bowie"
      }
    }
  },

  trackInView: {
    id: 432,
    title: "Life On Mars?",
    duration: 180,
    media_url: "http://some.url",
    image_url: "http://some.other.url",
    track_credits: "",
    artist_id: 67,
    comments: {
      94: {
        body: "My favorite",
        author: {
          id: 43,
          name: "Freddie Mercury",
          image_url: "http://some.url"
        }
        time_ago: "1 hour"
      },
      45: {
        body: "RIP Bowie",
        author: {
          id: 75,
          name: "Greg Porter",
          image_url: "http://some.other.url"
        }
        time_ago: "5 days"
      }
    }
  },

  userInView: {
    id: 523,
    name: "David Bowie",
    image_url: "http://some.url",
    location: "London, England"
  }
}

```
