class LoungesController < ApplicationController

  def index
    @lounges = Lounge.all
  end

  def show
    @lounge = Lounge.find(params[:id])
  end

end
