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
u6 = User.create!(username: 'Glenn', password: 'megaloft', email: 'megaloft')
u7 = User.create!(username: 'Kyle', password: 'megaloft', email: 'megaloft')
u8 = User.create!(username: 'Rob', password: 'megaloft', email: 'megaloft')
u9 = User.create!(username: 'Diony', password: 'curtis', email: 'curtis')
u10 = User.create!(username: 'Brittany', password: 'curtis', email: 'curtis')
u11 = User.create!(username: 'Elisabetta', password: 'curtissbu', email: 'curtissbu')


City.destroy_all
c1 = City.create!(name: 'Seattle')
c2 = City.create!(name: 'Rome')
c3 = City.create!(name: 'Portland')
c4 = City.create!(name: 'New York')
c5 = City.create!(name: 'Melbourne')
c6 = City.create!(name: 'London')

Meetup.destroy_all
m1 = Meetup.create!(date: DateTime.new(2017, 10, 31, 8, 0), address: "666 Spooky Lane", city_id: 7, host_id: u1.id)
m2 = Meetup.create!(date: DateTime.new(2017, 12, 24, 6, 30), address: "3 McClean Ave", city_id: 1000, host_id: u1.id)
m3 = Meetup.create!(date: DateTime.new(2018, 5, 18, 5, 0), address: "123 Fake St", city_id: 1000, host_id: u1.id)
m4 = Meetup.create!(date: DateTime.new(2018, 2, 2, 2, 30), address: "259 W 29th St", city_id: 1000, host_id: u1.id)
