class LoungesController < ApplicationController

  def index
    @lounges = Lounge.all
  end

  def show
  end

end
