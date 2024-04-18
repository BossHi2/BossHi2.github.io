from selenium import webdriver
from selenium.webdriver.chrome.service import Service
import time
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
import json


PATH = '/usr/local/bin/chromedriver'

url='https://homeaccess.katyisd.org/HomeAccess/Account/LogOn?ReturnUrl=%2fHomeAccess%2f'

grades = {
        'first':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],
        },
        'second':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],    
        },
        'third':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],
        },
        'fourth':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],  
        },
        'fifth':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],
        },
        'sixth':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],
        },
        'seventh':{
                'name': '',
                'average':'',
                'Major':[],
                'Minor':[],
                'Other':[],
        }
}

class Browser:
        browser, service = None, None

        def __init__(self, driver:str):
                    self.service = Service(driver)
                    self.browser = webdriver.Chrome(service=self.service)

        def open_page(self, url:str):
                self.browser.get(url)

        def close_browser(self):
                self.browser.close()

        def add_input(self, by: By, value: str, text: str):
                field = self.browser.find_element(by=by, value=value)
                field.send_keys(text)
                time.sleep(1)

        def click_button(self, by: By, value: str):
                button = self.browser.find_element(by=by, value=value)
                button.click()
                time.sleep(1)
        
        def login(self, username: str, password: str):
                self.add_input(by= By.ID, value='LogOnDetails_UserName', text=username)
                self.add_input(by= By.ID, value='LogOnDetails_Password', text=password)
                self.click_button(by = By.ID, value='login')

        def upload_grades(self):
                self.browser.switch_to.frame(self.browser.find_element(By.ID, 'sg-legacy-iframe'))
                
                self.save_first()
                self.save_second()
                self.save_third()
                self.save_fourth()
                self.save_fifth()
                self.save_sixth()
                self.save_seventh()
                
                        

        def save_first(self):
                
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_0').text
                        if average[17:] == "":
                                grades['first']['average'] = 0.0
                        else:
                                grades['first']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no first average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')

                total_name = parent_table[0].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['first']['name'] = total_name
                try:
                        child_table = parent_table[0].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_0')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['first'][grade_type].append(score + "#" + title)         
                except NoSuchElementException:
                        print('no first grades')

        def save_second(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_1').text
                        if average[17:] == "":
                                grades['second']['average'] = 0.0
                        else:
                                grades['second']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no second average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[1].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['second']['name'] = total_name
                try:
                        child_table = parent_table[1].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_1')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['second'][grade_type].append(score + "#" + title)   
                        

                except NoSuchElementException:
                        print('no second grades')

        def save_third(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_2').text
                        if average[17:] == "":
                                grades['third']['average'] = 0.0
                        else:
                                grades['third']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no third average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[2].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['third']['name'] = total_name
                try:
                        child_table = parent_table[2].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_2')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['third'][grade_type].append(score + "#" + title)   
                        
                                        

                except NoSuchElementException:
                        print('no third grades')
        
        def save_fourth(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_3').text
                        if average[17:] == "":
                                grades['fourth']['average'] = 0.0
                        else:
                                grades['fourth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no fourth average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[3].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['fourth']['name'] = total_name
                try:
                        child_table = parent_table[3].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_3')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['fourth'][grade_type].append(score + "#" + title)   
                        
                except NoSuchElementException:
                        print('no fourth grades')
        def save_fifth(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_4').text
                        if average[17:] == "":
                                grades['fifth']['average'] = 0.0
                        else:
                                grades['fifth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no fifth average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[4].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['fifth']['name'] = total_name
                try:
                        child_table = parent_table[4].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_4')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['fifth'][grade_type].append(score + "#" + title)   
                        
                except NoSuchElementException:
                        print('no fifth grades')
        
        def save_sixth(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_5').text
                        if average[17:] == "":
                                grades['sixth']['average'] = 0.0
                        else:
                                grades['sixth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no sixth average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[5].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['sixth']['name'] = total_name
                try:
                        child_table = parent_table[5].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_5')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['sixth'][grade_type].append(score + "#" + title)   
                        
                except NoSuchElementException:
                        print('no sixth grades')

        def save_seventh(self):
                try:
                        average = self.browser.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_6').text
                        if average[17:] == "":
                                grades['seventh']['average'] = 0.0
                        else:
                                grades['seventh']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no seventh average')

                parent_table = self.browser.find_elements(By.CLASS_NAME, 'AssignmentClass')
                total_name = parent_table[6].find_element(By.CLASS_NAME, 'sg-header-heading').text
                indexOfFirstLetter = total_name.find(next(filter(str.isalpha, total_name)))
                total_name = total_name[indexOfFirstLetter + 6:]
                if total_name.index(' ') == 0:
                        total_name = total_name[1:]
                grades['seventh']['name'] = total_name
                try:
                        child_table = parent_table[6].find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_dgCourseAssignments_6')
                        elements = child_table.find_elements(By.CLASS_NAME, 'sg-asp-table-data-row')
                        for assignments in elements:
                                grade_type = assignments.find_elements(By.TAG_NAME, 'td')[3].text
                                title = assignments.find_elements(By.TAG_NAME, 'td')[2].text
                                score = assignments.find_elements(By.TAG_NAME, 'td')[4].text 
                                grades['seventh'][grade_type].append(score + "#" + title)   
                        
                except NoSuchElementException:
                        print('no seventh grades')

if __name__ == '__main__':
        browser = Browser(PATH)
        browser.open_page(url)
        browser.login('K1222169', 'sam!2345')
        browser.click_button(By.ID, 'hac-Classes')
        browser.upload_grades()
        browser.close_browser()
        
        with open('src/grades.json', 'w') as _f:
                _f.write(json.dumps(grades, indent=4))
