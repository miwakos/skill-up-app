class BooksController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :destroy]

  def index
    @books = Book.all.includes(:user)
  end

  def new
    @book = Book.new
  end

  def create
    if Book.create(book_params)
      redirect_to books_path
    else
      render :new
    end
  end

  private

  def book_params
    params.require(:book).permit(:book_title, :author, :published_date, :book_introduction, :category_id).merge(user_id: current_user.id)
  end

end
