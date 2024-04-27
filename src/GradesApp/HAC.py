from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.chrome.options import Options
from flask import Flask
import json

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
app = Flask(__name__)

class Browser:
        def save_first(self, driver):
                
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_0').text
                        if average[17:] == "":
                                grades['first']['average'] = 0.0
                        else:
                                grades['first']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no first average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')

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

        def save_second(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_1').text
                        if average[17:] == "":
                                grades['second']['average'] = 0.0
                        else:
                                grades['second']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no second average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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

        def save_third(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_2').text
                        if average[17:] == "":
                                grades['third']['average'] = 0.0
                        else:
                                grades['third']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no third average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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
        
        def save_fourth(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_3').text
                        if average[17:] == "":
                                grades['fourth']['average'] = 0.0
                        else:
                                grades['fourth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no fourth average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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
        
        def save_fifth(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_4').text
                        if average[17:] == "":
                                grades['fifth']['average'] = 0.0
                        else:
                                grades['fifth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no fifth average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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
        
        def save_sixth(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_5').text
                        if average[17:] == "":
                                grades['sixth']['average'] = 0.0
                        else:
                                grades['sixth']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no sixth average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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

        def save_seventh(self, driver):
                try:
                        average = driver.find_element(By.ID, 'plnMain_rptAssigmnetsByCourse_lblHdrAverage_6').text
                        if average[17:] == "":
                                grades['seventh']['average'] = 0.0
                        else:
                                grades['seventh']['average'] = float(average[17:] + '.0')
                except NoSuchElementException:
                        print('no seventh average')

                parent_table = driver.find_elements(By.CLASS_NAME, 'AssignmentClass')
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
        chrome_options = Options()
        chrome_options.add_argument('--headless')
        driver = webdriver.Chrome(options=chrome_options)
        driver.get(url)
        username = driver.find_element(By.ID, 'LogOnDetails_UserName')
        username.send_keys('K1222169')
        password = driver.find_element(By.ID, 'LogOnDetails_Password')
        password.send_keys('sam!2345')
        logIn = driver.find_element(By.ID, 'login')
        logIn.click()
        classButton = driver.find_element(By.ID, 'hac-Classes')
        classButton.click()

        driver.switch_to.frame(driver.find_element(By.ID, 'sg-legacy-iframe'))
        browser = Browser()
        browser.save_first(driver)
        browser.save_second(driver)
        browser.save_third(driver)
        browser.save_fourth(driver)
        browser.save_fifth(driver)
        browser.save_sixth(driver)
        browser.save_seventh(driver)
        with open('src/GradesApp/grades.json', 'w') as _f:
                _f.write(json.dumps(grades, indent=4))
        print('done')
        

