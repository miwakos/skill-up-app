class BooksController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :destroy]
  before_action :books_by_category, only: [:index]

  def index
    @categories = Category.all
    @books = Book.all.order("created_at DESC").includes(:user)
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

  def search
  end

  def external_search
    if params[:keyword]
      # @books = RakutenWebService::Books::Book.search(title: params[:keyword])
      # render :new
      @books = RakutenWebService::Books::Book.search(booksGenreId: "001005")
      # render json: { status: 'success', data: @books }  
    end
  end

  private

  def book_params
    params.require(:book).permit(:image, :book_title, :author, :published_date, :book_introduction, :category_id).merge(user_id: current_user.id)
  end

  def books_by_category
    @books1 = Book.where(category_id: 1).includes(:user)
    @books2 = Book.where(category_id: 2).includes(:user)
    @books3 = Book.where(category_id: 3).includes(:user)
    @books4 = Book.where(category_id: 4).includes(:user)
    @books5 = Book.where(category_id: 5).includes(:user)
    @books6 = Book.where(category_id: 6).includes(:user)
    @books7 = Book.where(category_id: 7).includes(:user)
    @books8 = Book.where(category_id: 8).includes(:user)
    @books9 = Book.where(category_id: 9).includes(:user)
    @books10 = Book.where(category_id: 10).includes(:user)
    @books11 = Book.where(category_id: 11).includes(:user)
    @books12 = Book.where(category_id: 12).includes(:user)
    @books13 = Book.where(category_id: 13).includes(:user)
    @books14 = Book.where(category_id: 14).includes(:user)
    @books15 = Book.where(category_id: 15).includes(:user)
    @books16 = Book.where(category_id: 16).includes(:user)
    @books17 = Book.where(category_id: 17).includes(:user)
  end

end
