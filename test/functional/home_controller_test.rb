require 'test_helper'

class HomeControllerTest < ActionController::TestCase
  test "should get flights" do
    get :flights
    assert_response :success
  end

  test "should get hotels" do
    get :hotels
    assert_response :success
  end

  test "should get about" do
    get :about
    assert_response :success
  end

  test "should get backpackers" do
    get :backpackers
    assert_response :success
  end

end
