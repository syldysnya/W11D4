class StaticPagesController < ApplicationController

    def root
        return(
            <main id="root"></main>
        )
    end

end