# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
desc = "I couldn’t imagine living far from a city at any point in my life. I probably rely
on the energy of others to fuel my excitement about the world more than I should, but it’s
one of the big reasons sitting with people is so cool to me. There are few things so amazing
as throwing away concepts of time and immersing in someone else’s words. But books don’t do it
  for me too much, so I resort to tea with strangers. Join me?"
bgnd = "I’m often too arrogant to let myself be summed up in response to a question like
this, so I feel a natural obligation to defend my poor online image: ‘There’s much more where
this came from!’ I’m constantly in fear that I take things for granted. So I try to err on the
side of being really thankful of my luck. I was really lucky to be born to a family that I love
to no end, I was lucky to learn from incredible teachers, I was lucky to have friends that love me
dearly, and I’ve been lucky to live in three bomb cities — New York, Philly and, now, SF. All those
circumstances alone make me feel hugely indebted to the world around me, so I spend pretty much all
my time trying to find ways to pay off this massive loan. Fortunately, my payment plan is amortized
over 100 years or so."
tpcs = "More than the weather, quirky social norms that everyone seems to follow
but most of us don’t understand. What is the best thing you that you have done in the
last year, or ever (intentionally left vague, conversation seems to get more exciting
this way)! When will we be able to communicate exclusively through emojis and photos?
Sushi, smoothie recipes (for fellow veggie haters out there who realize we still need
to eat them), biohacking. What are you passionate about? How many exclamation marks are
too many, and what is just enough to convey you are stoked to do something?!?!? Where will
  the world be in 10 years, or next week?"
tgln = "The sky's the limit"
u1_img_url = "http://media1.britannica.com/eb-media/19/80619-004-9B9D0D26.jpg"
u2_img_url = "http://pbs.twimg.com/profile_images/742764508960153600/84biTbZb.jpg"
u3_img_url = "http://thegoodfight.s3.amazonaws.com/uploads/423632e9faa4e8187911e3736ee60b9a.jpg"
u4_img_url = "http://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/01/11/Untitled-3.jpg"
u8_img_url = "http://cdn.playbuzz.com/cdn/11787fb1-61db-4b70-bf74-520d52d9547b/5905dfe8-fe4a-4f5f-86ee-354d43b70ea3.jpg"
u9_img_url = "http://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/Daria_580400-MTV_DARIA._RI_SX940_.jpg"
u10_img_url = "http://pbs.twimg.com/profile_images/889736688624312321/xVAFH9ZH_400x400.jpg"



User.destroy_all
u1 = User.create!(username: 'Albert', password: 'einstein1', email: 'example1@hotmail.com', city_id: 1000, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u1_img_url)
u2 = User.create!(username: 'Brienne', password: 'tarth2', email: 'example2@hotmail.com', city_id: 7, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u2_img_url)
u3 = User.create!(username: 'Cory', password: 'booker3', email: 'example3@hotmail.com', city_id: 3, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u3_img_url)
u4 = User.create!(username: 'David', password: 'goliath4', email: 'example4@hotmail.com', city_id: 4, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u4_img_url)
u5 = User.create!(username: 'guest-user', password: 'guest-user', email: 'guest-user', city_id: 5, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln)
u6 = User.create!(username: 'Glenn', password: 'megaloft', email: 'megaloftG', city_id: 7)
u7 = User.create!(username: 'Kyle', password: 'megaloft', email: 'megaloftK', city_id: 1000, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln)
u8 = User.create!(username: 'Rob', password: 'megaloft', email: 'megaloftR', city_id: 2, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u8_img_url)
u9 = User.create!(username: 'Daria', password: 'useruser', email: 'curtisD', city_id: 3, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u9_img_url)
u10 = User.create!(username: 'Bill', password: 'gatesgates', email: 'gatesgates', city_id: 4, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln, img_url: u10_img_url)
u11 = User.create!(username: 'Elisabetta', password: 'curtissbu', email: 'curtissbu', city_id: 5, host_status: "true", description: desc, background: bgnd, topics: tpcs, tagline: tgln)
u12 = User.create!(username: 'Bimini', password: 'magnet', email: 'magnetB', city_id: 1)
u13 = User.create!(username: 'Janelle', password: 'magnet', email: 'magnetJ')
u14 = User.create!(username: 'Lizzy', password: 'magnet', email: 'magnetL', city_id: 3)
u15 = User.create!(username: 'Mikey', password: 'magnet', email: 'magnetM')
u16 = User.create!(username: 'Tim', password: 'magnet', email: 'magnetT', city_id: 5)
u17 = User.create!(username: 'Nolan', password: 'magnet', email: 'magnetN')



Meetup.destroy_all
m1 = Meetup.create!(date: DateTime.new(2017, 10, 31, 8, 0), address: "666 Spooky Lane", city_id: 7, host_id: u2.id)
m2 = Meetup.create!(date: DateTime.new(2017, 12, 24, 18, 30), address: "3 McClean Ave", city_id: 1000, host_id: u1.id)
m3 = Meetup.create!(date: DateTime.new(2018, 5, 18, 17, 0), address: "123 Fake St", city_id: 1000, host_id: u1.id)
m4 = Meetup.create!(date: DateTime.new(2018, 1, 15, 20, 0), address: "114 Old Circle Rd", city_id: 1, host_id: u10.id)
m5 = Meetup.create!(date: DateTime.new(2018, 2, 4, 18, 30), address: "259 W 29th St", city_id: 3, host_id: u3.id)
m6 = Meetup.create!(date: DateTime.new(2018, 3, 19, 16, 30), address: "333 Cherry Orchard Lane", city_id: 3, host_id: u3.id)
m7 = Meetup.create!(date: DateTime.new(2018, 4, 22, 14, 30), address: "4 Dock Street", city_id: 4, host_id: u4.id)
m8 = Meetup.create!(date: DateTime.new(2018, 5, 6, 12, 30), address: "18 Hylan Blvd", city_id: 5, host_id: u5.id)
m9 = Meetup.create!(date: DateTime.new(2017, 9, 22, 19, 0), address: "112 Crooked Hill Rd", city_id: 7, host_id: u2.id)
m10 = Meetup.create!(date: DateTime.new(2017, 11, 24, 11, 0), address: "414 Industrial Way", city_id: 1000, host_id: u7.id)
m11 = Meetup.create!(date: DateTime.new(2018, 2, 2, 11, 30), address: "77 Old Country Rd", city_id: 2, host_id: u2.id)
m12 = Meetup.create!(date: DateTime.new(2018, 2, 17, 20, 0), address: "1124 Nicholas St", city_id: 2, host_id: u8.id)
m13 = Meetup.create!(date: DateTime.new(2018, 4, 1, 18, 30), address: "29 Elm St", city_id: 6, host_id: u7.id)
m14 = Meetup.create!(date: DateTime.new(2018, 4, 19, 16, 30), address: "31 Duke Place", city_id: 6, host_id: u7.id)
m15 = Meetup.create!(date: DateTime.new(2018, 5, 30, 20, 30), address: "49 Belfast Ave", city_id: 8, host_id: u9.id)
m16 = Meetup.create!(date: DateTime.new(2018, 5, 6, 20, 30), address: "832 Main St", city_id: 9, host_id: u10.id)


# Attendance.destroy_all
# a1 = Attendance.create!(meetup_id: m2.id, attendee_id: u1.id)
# a2 = Attendance.create!(meetup_id: m3.id, attendee_id: u1.id)
# a3 = Attendance.create!(meetup_id: m4.id, attendee_id: u1.id)
# a4 = Attendance.create!(meetup_id: m1.id, attendee_id: u2.id)
# a5 = Attendance.create!(meetup_id: m4.id, attendee_id: u3.id)
# a2 = Attendance.create!(meetup_id: m6.id, attendee_id: u3.id)
# a2 = Attendance.create!(meetup_id: m7.id, attendee_id: u4.id)
# a2 = Attendance.create!(meetup_id: m8.id, attendee_id: u5.id)

City.destroy_all
c1 = City.create!(name: 'San Francisco', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/001/small/sf.jpg?1409550565')
c2 = City.create!(name: 'New York', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/005/small/nyc2-correct.jpg?1409550576')
c3 = City.create!(name: 'Boston', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/006/small/boston.jpg?1409550578')
c4 = City.create!(name: 'London', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/021/small/image.jpg?1413022522')
c5 = City.create!(name: 'DC', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/007/small/dc.jpg?1409550580')
c6 = City.create!(name: 'Chicago', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/010/small/chicago.jpg?1409550585')
c7 = City.create!(name: 'Gravity Falls', url: 'https://vignette4.wikia.nocookie.net/gravityfalls/images/0/08/Opening_Main_characters_of_Gravity_Falls.png/revision/latest?cb=20160119145809')
c8 = City.create!(name: 'Ba Sing Se', url: 'http://vignette2.wikia.nocookie.net/avatar/images/f/f7/Modern_Ba_Sing_Se.png/revision/latest?cb=20140730154445')
c9 = City.create!(name: 'New New York', url: 'http://vignette2.wikia.nocookie.net/en.futurama/images/5/55/160_planet-express-building_1024.png/revision/latest?cb=20090521203416')
c10 = City.create!(name: 'Seattle', url: 'http://www.sustainableseattle.org/wp-content/uploads/2015/08/SeattleMunicipleArchive-e1488676312333.jpg')
