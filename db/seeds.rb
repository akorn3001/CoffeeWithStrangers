# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
u1 = User.create!(username: 'Albert', password: 'einstein1', email: 'example1@hotmail.com', city_id: 1000, host_status: true)
u2 = User.create!(username: 'Bertrand', password: 'russell2', email: 'example2@hotmail.com')
u3 = User.create!(username: 'Calvin', password: 'hobbes3', email: 'example3@hotmail.com')
u4 = User.create!(username: 'David', password: 'goliath4', email: 'example4@hotmail.com')
u5 = User.create!(username: 'guest-user', password: 'guest-user', email: 'guest-user')
u6 = User.create!(username: 'Glenn', password: 'megaloft', email: 'megaloftG')
u7 = User.create!(username: 'Kyle', password: 'megaloft', email: 'megaloftK', city_id: 1, host_status: true)
u8 = User.create!(username: 'Rob', password: 'megaloft', email: 'megaloftR', city_id: 2, host_status: true)
u9 = User.create!(username: 'Diony', password: 'curtis', email: 'curtisD', city_id: 3, host_status: true)
u10 = User.create!(username: 'Brittany', password: 'curtis', email: 'curtisB', city_id: 4, host_status: true)
u11 = User.create!(username: 'Elisabetta', password: 'curtissbu', email: 'curtissbu', city_id: 5, host_status: true)


City.destroy_all
c1 = City.create!(name: 'San Francisco', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/001/small/sf.jpg?1409550565')
c2 = City.create!(name: 'New York', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/005/small/nyc2-correct.jpg?1409550576')
c3 = City.create!(name: 'Boston', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/006/small/boston.jpg?1409550578')
c4 = City.create!(name: 'London', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/021/small/image.jpg?1413022522')
c5 = City.create!(name: 'DC', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/007/small/dc.jpg?1409550580')
c6 = City.create!(name: 'Chicago', url: 'http://s3.amazonaws.com/tws-production-paperclip/cities/header_bgs/000/000/010/small/chicago.jpg?1409550585')
c7 = City.create!(name: 'Gravity Falls', url: 'https://vignette4.wikia.nocookie.net/gravityfalls/images/0/08/Opening_Main_characters_of_Gravity_Falls.png/revision/latest?cb=20160119145809')
c8 = City.create!(name: 'Ba Sing Se', url: 'https://vignette2.wikia.nocookie.net/avatar/images/f/f7/Modern_Ba_Sing_Se.png/revision/latest?cb=20140730154445')
c9 = City.create!(name: 'New New York', url: 'http://vignette2.wikia.nocookie.net/en.futurama/images/5/55/160_planet-express-building_1024.png/revision/latest?cb=20090521203416')


Meetup.destroy_all
m1 = Meetup.create!(date: DateTime.new(2017, 10, 31, 8, 0), address: "666 Spooky Lane", city_id: 7, host_id: u2.id)
m2 = Meetup.create!(date: DateTime.new(2017, 12, 24, 6, 30), address: "3 McClean Ave", city_id: 1000, host_id: u1.id)
m3 = Meetup.create!(date: DateTime.new(2018, 5, 18, 5, 0), address: "123 Fake St", city_id: 1000, host_id: u1.id)
m4 = Meetup.create!(date: DateTime.new(2018, 1, 15, 20, 00), address: "114 Old Circle Road", city_id: 1, host_id: u1.id)
m5 = Meetup.create!(date: DateTime.new(2018, 2, 4, 18, 30), address: "259 W 29th St", city_id: 3, host_id: u3.id)
m6 = Meetup.create!(date: DateTime.new(2018, 3, 19, 16, 30), address: "333 Cherry Orchard Lane", city_id: 3, host_id: u3.id)
m7 = Meetup.create!(date: DateTime.new(2018, 4, 22, 14, 30), address: "4 Dock Street", city_id: 4, host_id: u4.id)
m8 = Meetup.create!(date: DateTime.new(2018, 5, 6, 12, 30), address: "18 Hylan Blvd", city_id: 5, host_id: u5.id)
