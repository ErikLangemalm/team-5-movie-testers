Feature: Prototype
  As a the system manager
  I want to be able to see a prototype with at least 5 movies distributed
  over 30 dates/times in our 2 movie saloons

  Background:
    Given that im scrolling for movies available

  Scenario Outline: Displaying a protoype with 5 different movies across 30 viewing dates
    Given That I am scrolling for movies as the system manager
    When I choose to go into the system to see the prototype
    Then I should see a display with 5 movies across 30 viewing dates
    And I should then be able to see following information:
    * Movie name
    * Movie Teather
    * Viewing Dates

    Examples:

      | Film Title | Movie Theatre | Viewing Dates |

      | Gladiator | Stockholm | 1/2-24  -  22/2-24 |

      | Pulp Fiction | London | 5/2-24  -  26/2-24 |

      | Interstellar | London | 3/2-24  -  24/2-24 |

      | Shawshank Redemption | Stockholm | 4/2-24  -  25/2-24 |

      | Happy Gilmore | London | 1/2-24  -  22/2-24 |


  Scenario Outline: Displaying a protoype with 5 different movies across 30 viewing dates with more datailed information
    Given That I am scrolling for movies as the system manager
    When I choose to go into the system to see the prototype
    Then I should see a display with 5 movies across 30 viewing dates including a bit more information
    And I should then be able to see following information:
    * Movie name
    * Genre
    * Duration
    * Movie Teather
    * Viewing Dates

    Examples:
      | Film Title | Genre | Duration | Movie Theatre | Viewing Dates |

      | Gladiator | Adventure, Drama, Action | 2h 35min | Stockholm | 1/2-24  -  22/2-24 |

      | Pulp Fiction | Detective, Action | 2h 34min | London | 5/2-24  -  26/2-24 |

      | Interstellar | Sci - Fi, Adventure, Drama | 2h 49min | London | 3/2-24  -  24/2-24 |

      | Shawshank Redemption | Drama | 2h 24min | Stockholm | 4/2-24  -  25/2-24 |

      | Happy Gilmore | Comedy, Sport | 1h 32min | London | 1/2-24  -  22/2-24 |





