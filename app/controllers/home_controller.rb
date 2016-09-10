class HomeController < ApplicationController
  def index

      @numbers = ['assets/gerbil.png',
                  'assets/gerbil.png',
                  'assets/dog.jpg',
                  'assets/dog.jpg',
                  'assets/ugly.jpg',
                  'assets/ugly.jpg',
                  'assets/ugly-cat.jpg',
                  'assets/ugly-cat.jpg',
                  'assets/echidna.jpg',
                  'assets/echidna.jpg',
                  'assets/llama.jpg',
                  'assets/llama.jpg',
                  'assets/monkey.jpg',
                  'assets/monkey.jpg',
                  'assets/Sea-Wolf1.jpg',
                  'assets/Sea-Wolf1.jpg'].shuffle
      end
    end
