FactoryBot.define do
  factory :user, aliases:[:seller] do

    nickname              {"abe"}
    email                 {"kkkk@gmail.com"}
    password              {"00000000"}
    password_confirmation {"00000000"}
  end

end
