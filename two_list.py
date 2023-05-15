class Box:
    def __init__(self, cat = None):
        self.cat = cat
        self.nextcat = None
    def contains(self, cat):
        lastbox = self.head
        while(lastbox):
            if cat == lastbox.cat:
                return True

            else:
                lastbox = lastbox.nextcat
        return False

    def addToEnd(self, newcat):
        newbox = Box(newcat)
        if self.head is None:
            self.head = newbox
            return
        lastbox = self.head
        while(lastbox.nextcat):
            lastbox = lastbox.nextcat
        lastbox.nextcat = newbox

class LinkedList:
    def __init__(self):
        self.head = None

if __name__ == '__main__':
   s= Stack()
   s.push(1)
   s.push(2)
   s.push(3)
   s.pop()
