import unittest

# Selenuim testing webdriver

import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


class ChromeSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(
            r'C:\Users\stree\Downloads\ex\chromedriver.exe')

    def test_search_in_python_org(self):
        driver = self.driver
        driver.get("https://www.python.org")
        self.assertIn("Python", driver.title)
        elem = driver.find_element_by_name("q")
        elem.send_keys("getting started with python")
        elem.send_keys(Keys.RETURN)
        assert "https://www.python.org/search/?q=getting+started+with+python&submit=" == driver.current_url


def tearDown(self):
    self.driver.close()


if __name__ == "__main__":
    unittest.main()

# class TestBBScraping(unittest.TestCase):

#     def testDatabaseURL(self):

#         BBScraping.client = 'mongodb+srv://Anil:Bhusal@cluster0.kjwlj.mongodb.net'
#         self.assertEqual(
#             BBScraping.client, "mongodb+srv://Anil:Bhusal@cluster0.kjwlj.mongodb.net")


# if __name__ == '__main__':
#     unittest.main()
