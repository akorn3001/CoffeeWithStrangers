# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create!(username: 'Albert', password: 'einstein1', email: 'example1@hotmail.com', city_id: 1000)
u2 = User.create!(username: 'Bertrand', password: 'russell2', email: 'example2@hotmail.com')
u3 = User.create!(username: 'Calvin', password: 'hobbes3', email: 'example3@hotmail.com')
u4 = User.create!(username: 'David', password: 'goliath4', email: 'example4@hotmail.com')
u5 = User.create!(username: 'guest-user', password: 'guest-user', email: 'guest-user')

City.destroy_all
c1 = City.create!(name: 'Seattle')
c2 = City.create!(name: 'Rome')
c3 = City.create!(name: 'Portland')
c4 = City.create!(name: 'New York')
c5 = City.create!(name: 'Melbourne')
c6 = City.create!(name: 'London')
