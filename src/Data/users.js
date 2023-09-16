import user from '../reducers/user';
 
// Information about Users
export const data = {
    profile: {
      id: 1,
      name: "Waseem Akram",
      image: user.image,
      contacts: [
        {
          id: 2,
          name: "Akash",
          image:
            "https://e1.pxfuel.com/desktop-wallpaper/224/8/desktop-wallpaper-smart-indian-boy-pic.jpg",
          chatlog: [
            {
              text: "Hello bro",
              timestamp: "08:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hi buddy. How are you doing",
              timestamp: "08:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am doing good. What about you?",
              timestamp: "08:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Iam good too. Thanks for asking",
              timestamp: "08:04 AM",
              sender: "me",
              message_id: 4,
            },
          ],
        },
        {
          id: 3,
          name: "Purva",
          image:"https://media.istockphoto.com/id/1338134319/photo/portrait-of-young-indian-businesswoman-or-school-teacher-pose-indoors.jpg?s=612x612&w=0&k=20&c=Dw1nKFtnU_Bfm2I3OPQxBmSKe9NtSzux6bHqa9lVZ7A=",
          chatlog: [
            {
              text: "Hello Purva!",
              timestamp: "07:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Hello Waseem!",
              timestamp: "07:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Have you completed the assinged work.",
              timestamp: "07:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes, Its almost done. Will connect you after completion",
              timestamp: "07:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Thanks. Please feel free to connect with me if you face any problem!",
              timestamp: "07:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Mahesh",
          image:
            "https://www.veethi.com/images/people/profile/Tej_(south_Indian_Actor).png",
          chatlog: [
            {
              text: "Hey Mahesh, How are you ",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great , Then What up.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Peter",
          image:
            "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?s=612x612&w=0&k=20&c=QjebAlXBgee05B3rcLDAtOaMtmdLjtZ5Yg9IJoiy-VY=",
          chatlog: [],
        },
        {
          id: 6,
          name: "Stacy",
          image:
            "https://dp.profilepics.in/profile_pictures/american-girls/american-girls-dp-70.jpg",
          chatlog: [
            {
              text: "Hi Stacy, what are you doing?",
              timestamp: "04:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "Nothing special. Going for dinner, Come join me",
              timestamp: "04:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure?",
              timestamp: "04:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "04:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right. Lets meet in 15min...",
              timestamp: "04:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Raghav",
          image:
            "https://www.nowrunning.com/content/Artist/Shanavas/banner.jpg",
          chatlog: [
            {
              text: "Hello Raghav. How do you do ? ",
              timestamp: "02:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I am doing great! what about you",
              timestamp: "02:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "Great. Will connect with you after sometime",
              timestamp: "02:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "02:08 AM",
              sender: "user",
              message_id: 4,
            },
          ],
        },
        {
          id: 8,
          name: "Sameer Khan",
          image:"https://digikarma.in/image/blogs/blog8/2.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Harry",
          image:"https://media.gettyimages.com/id/200538468-007/photo/young-businessman-looking-up-profile.jpg?s=612x612&w=gi&k=20&c=2zcMWov5R0Q4q259H9uUJZbjVamZzHcGagsA3XqBN1E=",
          chatlog: [],
        },
        {
          id: 10,
          name: "Rocky Singh",
          image:"https://www.vivahonline.com/profileimages/profile_IMG_20170707_034945_547.jpg",
          chatlog: [],
        },
        {
          id: 11,
          name: "Rani",
          image:"https://dp.profilepics.in/profile-pictures-for-facebook-whatsapp/real-indian-girls-profile-pics/real-girls-indian-girls-profile-pictures-for-whatsapp-facebook-66.jpg",
          chatlog: [],
        },
        {
          id: 12,
          name: "Suraj kumar",
          image:
            "https://thumbs.dreamstime.com/z/indian-ethnic-man-profile-young-31157714.jpg",
          chatlog: [],
        },
      ],
    },
  };